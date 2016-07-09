from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    # url(r'^home/$', views.home, name="home"),
    # url(r'^about/$', views.about, name="about"),
    # url(r'^contact/$', views.contact, name="contact"),
    # url(r'^terms/$', views.terms, name="terms"),
    # url(r'^privacy/$', views.privacy, name="privacy"),
    url(r'^login/$', views.login_view, name="login"),
    url(r'^logout/$', views.logout_view, name="logout"),
    url(r'^(?P<cat>\w+)/$', views.category, name="category"),
    url(r'^(?P<cat>\w+)/(?P<subcat>\w+)/$', views.subcategory, name="subcategory"),
    url(r'^(?P<cat>\w+)/(?P<slug>[\w-]+)/$', views.read, {'subcat':'none'}, name="read"),
    url(r'^(?P<cat>\w+)/(?P<subcat>\w+)/(?P<slug>[\w-]+)/$', views.read, name="read"),
]