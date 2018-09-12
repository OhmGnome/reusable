export function onWindowResize(callbacks) {
    if (!callbacks || !callbacks.length) return;
    
    function resizeThrottler(){
        let timeout;
        const debounce = 66;
        throttle(debounce, timeout, callbacks)
    }

    window.addEventListener("resize", resizeThrottler, false);

}

export function throttle(debounce, timeout, callbacks) {
    if (!timeout) {
        timeout = setTimeout(function () {
            timeout = null;
            run();
        }, debounce);
    }

    function run() {
        callbacks.forEach(fn => fn())
    }
}

export const chainScrollLeft = (el, scrollable) => {
    const debounce = 166;
    let timeout;

    jQuery(scrollable).scroll(function ()
    {
        const offset = () => {
            jQuery(el).offset({ left: -1*this.scrollLeft });
        }
        offset()
        throttle(debounce, timeout, [offset]);
    });
}
