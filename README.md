This is a simplified test case showing an issue using the browser back button to
return to a page that had a card loaded.

In Safari and Chrome, the loading fails, related to the way they handle iframes around
navigation: https://bugs.webkit.org/show_bug.cgi?id=64895

Run contents of this folder from a server using `asdf`:

    gem install asdf

    asdf

open browser to:

    http://localhost:9292/index.html
