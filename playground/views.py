from django.shortcuts import redirect, render

# Create your views here.


def send_to_main(request):
    return redirect(main)


def main(request):
    return render(request, 'main.html')


def skills(request):
    return render(request, 'skills.html')


def python_proj(request):
    return render(request, 'python_proj.html')


def html_proj(request):
    return render(request, 'html_proj.html')


def cpp_proj(request):
    return render(request, "cpp_proj.html")


def about_me(reqeust):
    return render(reqeust, 'about_me.html')


def test(request):
    return render(request, 'test.html')