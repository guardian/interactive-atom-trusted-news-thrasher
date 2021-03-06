function getCookieValue(name) {
    var val = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return val ? val.pop() : undefined;
}

function shouldHideSupportMessaging() {
    return getCookieValue('gu_hide_support_messaging') === 'true';
}


if (shouldHideSupportMessaging()) {
    document.getElementById("digital-subscription").style.display = "none";
} else {
    document.getElementById("digital-subscription").style.display = "block";
}