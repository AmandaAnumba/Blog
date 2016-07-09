from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import views, authenticate, login
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from django.conf import settings
# from django.db.models import Q

import json, time

# from .models import *



# Global Variables
# ------------------
# CYCLE = Cycle.objects.get(is_current=True)
DEBUG = settings.DEBUG
V = '2016-06-04-1350'
DATA = {
    'page': '',
    'version': V,
    'hasPageJS': True,
    'hasPageCSS': True,
    'debug': DEBUG,
    # 'cycle': CYCLE.number,
    # 'cycleTitle': CYCLE.title,
    'loggedIn': False
}


def category(request, cat):
    PAGEDATA = {}
    PAGEDATA.update(DATA)
    PAGEDATA['page'] = cat
    PAGEDATA['hasPageJS'] = False
    PAGEDATA['hasPageCSS'] = False

    if cat == 'cycle':
        # articles = Article.objects.filter(cycle_article=True).filter(cycle=CYCLE).order_by('-published_date')
        articles = "test"
        
        return render(request, 
            "blog/CycleDisplay.html", 
            {
                'data': PAGEDATA,
                'articles':articles,
                # 'cycle':CYCLE,
                'sub':''
            }
        )

    # else:
    #     category = Topic.objects.get(name=cat.title())

    #     if category.is_parent:
    #         subcat = list(category.subcategory.all())
    #         articles = Article.objects.filter(
    #                 Q(category__in=subcat) | Q(category=category)
    #             ).order_by('-published_date').distinct()
    #     else:
    #         articles = Article.objects.filter(category=category).order_by('-published_date')
    #         subcat = []
        
    #     return render(request, 
    #         "blog/TopicDisplay.html", 
    #         {
    #             'data': PAGEDATA,
    #             'category': category,
    #             'subCategories':subcat,
    #             'articles':articles,
    #             'sub':''
    #         }
    #     )


def subcategory(request, cat, subcat):
    PAGEDATA = {}
    PAGEDATA.update(DATA)
    PAGEDATA['page'] = cat
    PAGEDATA['hasPageJS'] = False
    PAGEDATA['hasPageCSS'] = False

    # category = Topic.objects.get(name=cat.title())
    # sub = Topic.objects.get(name=subcat.title())
    # articles = Article.objects.filter(category=sub).order_by('-published_date')
        
    return render(request, 
        "blog/TopicDisplay.html", 
        {
            'data': PAGEDATA, 
            # 'category': category,
            # 'subCategories':[],
            # 'articles':articles,
            # 'sub':subcat
        }
    )

def read(request, cat, subcat, slug):
    PAGEDATA = {}
    PAGEDATA.update(DATA)
    PAGEDATA['page'] = cat
    PAGEDATA['hasPageJS'] = False
    PAGEDATA['hasPageCSS'] = False

    a = Article.objects.get(slug=slug)

    if a is not None:
        if a.article_type == 'regular':
            return render(request, "blog/ArticleDisplay.html", {'article':a})

        elif a.article_type == 'feature':
            return render(request, "blog/ArticleDisplay.html", {'article':a})
    else:
        print( 'error')
        return redirect(category, cat=cat)


def index(request):
    PAGEDATA = {}
    PAGEDATA.update(DATA)
    PAGEDATA['page'] = 'home'
    PAGEDATA['hasPageJS'] = False
    
    return render(request, 
    	'home/index.html', 
    	{
    		'data': PAGEDATA
    	}
    )
