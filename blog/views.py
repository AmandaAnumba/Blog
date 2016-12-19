from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import views, authenticate, login, logout
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from django.conf import settings
from django.db.models import Q

import json, time

from .models import *



# Global Variables
# ------------------
CYCLE = Cycle.objects.get(is_current=True)
DEBUG = settings.DEBUG
V = '2016-07-24-1350'
DATA = {
    'page': '',
    'version': V,
    'hasPageJS': True,
    'hasPageCSS': True,
    'debug': DEBUG,
    'cycle': CYCLE.number,
    'cycleTitle': CYCLE.title,
    'loggedIn': False
}


def category(request, cat):
    PAGEDATA = {}
    PAGEDATA.update(DATA)
    PAGEDATA['page'] = 'blog'

    if cat == 'cycle':
        a = Article.objects.filter(cycle_article=True).filter(cycle=CYCLE).order_by('-published_date')
        
        feature = a[0]
        articles = a[1:]

        return render(request, 
            "blog/CycleDisplay.html", 
            {
                'data': PAGEDATA,
                'feature': feature,
                'articles': articles,
                'cycle': CYCLE,
                'sub': ''
            }
        )

    else:
        category = Topic.objects.get(name=cat.title())

        if category.is_parent:
            subcat = list(category.subcategory.all())
            a = Article.objects.filter(
                    Q(category__in=subcat) | Q(category=category),
                    Q(status='published')
                ).order_by('-published_date').distinct()
        else:
            a = Article.objects.filter(category=category).order_by('-published_date')
            subcat = []
        
        feature = a[0]
        articles = a[1:]

        return render(request, 
            "blog/TopicDisplay.html", 
            {
                'data': PAGEDATA,
                'category': category,
                'subCategories': subcat,
                'feature': feature,
                'articles': articles,
                'sub':''
            }
        )


def subcategory(request, cat, subcat):
    PAGEDATA = {}
    PAGEDATA.update(DATA)
    PAGEDATA['page'] = cat
    PAGEDATA['hasPageJS'] = False
    PAGEDATA['hasPageCSS'] = False

    category = Topic.objects.get(name=cat.title())
    sub = Topic.objects.get(name=subcat.title())
    articles = Article.objects.filter(category=sub).order_by('-published_date')
        
    return render(request, 
        "blog/TopicDisplay.html", 
        {
            'data': PAGEDATA, 
            'category': category,
            'subCategories':[],
            'articles':articles,
            'sub':subcat
        }
    )


def read(request, author, slug):
# def read(request, cat, subcat, slug):
    PAGEDATA = {}
    PAGEDATA.update(DATA)
    PAGEDATA['page'] = 'article'


    a = Article.objects.get(slug=slug)

    print(a.author)


    u = Member.objects.get(user=a.author)

    if a is not None and u is not None:
        template = "blog/ArticleDisplay_regular.html"
        # if a.article_type == 'feature':
        #     template = "blog/ArticleDisplay_feauture.html"
        # else:
        #     template = "blog/ArticleDisplay_regular.html"

        return render(request, template, 
            {
                'data': PAGEDATA, 
                'article': a,
                # 'category' : cat if a.category.name is None else '',
                'user' : u
            }
        ) 
    else:
        print( 'error')
        return redirect(category, cat=cat)










# ---------------------------------------
#       Misc Pages
# ---------------------------------------
def index(request):
    return redirect(category, cat="cycle")


@csrf_protect
@require_http_methods(["POST"])
def login_view(request):
    if request.method == 'POST':
        body = json.loads(request.body.decode('utf-8'))
        username = body['username']
        password = body['password']

        user = authenticate(username=username, password=password)
        u = User.objects.get(username=username)

        if user is not None:
            if user.is_active:
                login(request, user)
                request.session['username'] = username
                return JsonResponse({ 'success': ""})
            else:
                return JsonResponse({ 'error': 'Your account has been disabled. Please contact <email> for assistance.'})
        else:
            return JsonResponse({ 'error': "The username/password combination is incorrect."})
    else:
        return redirect(index)


def logout_view(request):
    logout(request)
    return redirect(index)



