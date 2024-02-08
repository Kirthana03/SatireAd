AFRAME.registerComponent('state-toggle',{
    init: function() {
        let el = this.el;
        var light = document.querySelector('#light01');
        // var KC01 = document.querySelector('#KC01');

        this.toggleState = function() {
            console.log('clicked');
            el.setAttribute('animation', 'property: rotation; to: 30 400 40; dir:alternate; dur:2000; loop:false');
            light.setAttribute('animation','property: position; to: 10 20 20; dur:1500; loop:false');
            // KC01.setAttribute('animation','property: position; to: 10 -4 40; dur:1500; loop:false');
            el.components.sound.stopSound();
        }
        this.el.addEventListener('click',this.toggleState);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.toggleState);

    }
})
