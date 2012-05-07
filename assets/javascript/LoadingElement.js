function ElementLoading() {
    var _id = Math.random();

    this.show = function (msg) {
        var loadingContainer = $("#loadingElementContainer");

        if (loadingContainer.length == 0) {
            loadingContainer = createLoadingContainer().appendTo(document.body);
        }

        addLoadingElement(msg);
    };

    this.destroy = function () {
        document.getElementById("loadingElementContainer").removeChild(document.getElementById(_id));
    }

    function createLoadingContainer() {
        var loadingContainer = $('<div>', { id: "loadingElementContainer" });
        return loadingContainer;
    }

    function createLoading(msg) {
        var loadingElmt = $('<div>', { id: _id, 'class': 'LoadingElement' });
        var messageElmt = $('<div>', { 'class': 'message' });
        if (msg)
            messageElmt.text(msg);
        messageElmt.appendTo(loadingElmt);

        return loadingElmt;
    }

    function addLoadingElement(msg) {
        createLoading(msg).appendTo($("#loadingElementContainer"));
//        var loadingElements = $("#loadingElementContainer").children();
//        var sameMessage;
//        for (var i = 0; i < loadingElements.length; i++) {
//            if (loadingElements[i].innerText.trim() === msg) {
//                sameMessage = loadingElements[i];
//                break;
//            }
//        }

//        if (!sameMessage) {
//            createLoading(msg).appendTo($("#loadingElementContainer"));
//        }
    }
}