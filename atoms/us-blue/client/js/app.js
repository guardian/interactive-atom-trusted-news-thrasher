function getCookieValue(name) {
    var val = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return val ? val.pop() : undefined;
}

function shouldHideSupportMessaging() {
    return getCookieValue('gu_hide_support_messaging') === 'true';
}


if (shouldHideSupportMessaging()) {
    document.getElementById("trusted-news").style.display = "none";
} else {
    document.getElementById("trusted-news").style.display = "block";
}