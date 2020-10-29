$(function () {

    var MAX_SCALE = 4;
    var SCALE_STEP = 0.40;
    var focus = null;
    var isOpen = false;
    var settings = null;
    var autoPadding = ['.navbar', '#wrapper'];
    
    function openImage(newFocus) {

        if(isOpen || newFocus == focus) return;

        isOpen = true;

        settings = {
            scale: 1.0,
            element: newFocus,
            offsetY: 0,
            offsetX: 0,
            startOffsetX: 0,
            startOffsetY: 0,
            isPress: false,
            startPageX: null,
            startPageY: null
        };

        getScaledDimension = function(scale){
            var elemOffset = $("#imageFocus").offset();
            var elemWidth = $("#imageFocus").width() * scale;
            var elemHeight = $("#imageFocus").height() * scale;
            return {
                top: elemOffset.top,
                left: elemOffset.left,
                right: elemOffset.left + elemWidth,
                bottom: elemOffset.top + elemHeight
            }
        }

        isHoverImage = function(event){
            var dimension = getScaledDimension(settings.scale);
            return (
                event.pageX >= dimension.left && 
                event.pageX <= dimension.right &&
                event.pageY >= dimension.top && 
                event.pageY <= dimension.bottom
            );
        }
        
        zoom = function(incScale){
            var scale = Math.max(Math.min(settings.scale + incScale, MAX_SCALE), 1);
            if(scale == 1){
                settings.offsetX = 0;
                settings.offsetY = 0;
            }
            else if(incScale < 0){
                var ratio = scale / (settings.scale * 1.5);
                settings.offsetX = settings.offsetX * ratio;
                settings.offsetY = settings.offsetY * ratio;
            }

            settings.startPageX =  settings.offsetX;
            settings.startPageY = settings.offsetY;
            settings.startOffsetX = settings.offsetX;
            settings.startOffsetY = settings.offsetY;
            settings.scale = scale;

            $("#imageFocus").css('transform',`scale(${settings.scale})`);
            $("#imageFocus").css('left',`${settings.offsetX}px`);
            $("#imageFocus").css('top', `${settings.offsetY}px`);
        }
        
        $('#wrapper').after(`
            <div id="imagePreview" class="image-preview">
                <div id="previewBackground" class="image-background"></div>
                <div id="previewContent" class="image-content"></div>
                <div class="image-overlay-action-group">
                    <div class="image-overlay-action" id="zoomInImage">
                        <div class="icon-action "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24"><path d="M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"></path></svg></div>
                    </div>
                    <div class="image-overlay-action" id="zoomOutImage">
                        <div class="icon-action"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24"><path d="M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z"></path></svg></div>
                    </div>
                    <div class="image-overlay-close image-overlay-press" id="closeImagePreview">
                        <div class="image-overlay-close-icon">
                    </div>
                </div> 
            </div>
        `);

        var image = $(newFocus).clone();
        image.addClass("image-focus");
        image.attr('id', 'imageFocus');
        image.attr("title", null);
        image.attr("draggable", false);
        image.attr("ondragstart", "return false;");

        $('#previewContent').append(image);

        $("#previewBackground").click(function(event) {
            event.stopPropagation(); 
            closeImage();
        });

        $("#zoomOutImage").click(function(event) {
            event.stopPropagation(); 
            zoom(-SCALE_STEP);
        });

        $("#zoomInImage").click(function(event) {
            event.stopPropagation(); 
            zoom(SCALE_STEP);
        });

        $("#closeImagePreview").click(function(event) {
            event.stopPropagation(); 
            closeImage();
        });

        $("#previewContent").mousedown(function(event) {  
            event.stopPropagation();
            switch (event.which) {
            case 1:
                settings.isPress = true;
                settings.startPageX = event.pageX;
                settings.startPageY = event.pageY;
                break;
            }
        });

        $("#previewContent").mouseup(function(event) {  
            event.stopPropagation();
            switch (event.which) {
            case 1: 
                if( event.pageX == settings.startPageX &&
                    event.pageY == settings.startPageY)
                {
                    if(!isHoverImage(event))
                    {
                        closeImage();
                    }
                }
                settings.startOffsetX = settings.offsetX;
                settings.startOffsetY = settings.offsetY;
                settings.offset = null;
                settings.isPress = false;
                $("#previewContent").css('cursor', "pointer");
                break;
            } 
        });

        $("#previewContent").mousemove(function(event){
            event.stopPropagation();
            if(event.which == 1 && 
                settings.isPress && 
                settings.startPageX != null &&
                settings.startPageY != null &&
                settings.scale > 1.0){
                settings.offsetX = settings.startOffsetX + event.pageX - settings.startPageX;
                settings.offsetY = settings.startOffsetY + event.pageY - settings.startPageY;
                $("#imageFocus").css('left',`${settings.offsetX}px`);
                $("#imageFocus").css('top', `${settings.offsetY}px`);
                $("#previewContent").css('cursor', "grabbing");
            }
            else{
                $("#previewContent").css('cursor', "pointer");
            }
        });

        $("#previewContent").bind('contextmenu', function(e){            
            return false;
        });

        $("#imageFocus").bind('dragstart', function(e){            
            return false;
        });

        disableScrollBar();
    }

    function closeImage() {
        if(!isOpen) return;
        isOpen = false;

        $('#imagePreview').css('opacity','0.0');

        setTimeout(function(){
            $('#imagePreview').remove();
            enableScrollBar();
        }, 200);
    }

    function enableScrollBar(){
        $("html").removeClass("no-scroll");
        $(autoPadding.join(',')).css('padding', "inherit");
    }

    function disableScrollBar(){
        var scrollBarWidth = window.innerWidth-$(window).width();
        $(autoPadding.join(',')).css('padding-right', `${scrollBarWidth}px`);
        $("html").addClass("no-scroll");
    }

    $("img").attr("title", "Click to view larger");

    $("body").on("click", "img", function (event) {
        event.stopPropagation();
        openImage(this);
    });

    $(document).mouseup(function(event){
        if(settings != null){
            settings.isPress = false;
        }
    });
})