package com.joyous.ccaphymns;

import android.net.Uri;
import android.view.View;
import android.content.Intent;
import android.webkit.JavascriptInterface;

public class JavascriptHandler {
    View v;
    @JavascriptInterface
    private void openme() {
        MainActivity m = new MainActivity();
        m.onBrowseClick();
    }
}