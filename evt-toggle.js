AFRAME.registerComponent('evt-toggle',{
    init: function() {
        let el = this.el;
        var Kcl = document.querySelector('#rig');
        var L01 = document.querySelector('#L1');
        var L02 = document.querySelector('#L2');

        this.toggleevt = function() {
            console.log('clicked');
            el.setAttribute('animation', 'property: rotation; to: 360 0 0; dir:alternate; dur:2000; loop:false');
            Kcl.setAttribute('animation', 'property: position; to: 0 0 60; dir:alternate; dur:2000; loop:false');
            L01.setAttribute('animation', 'property: position; to: -20 -5 20; dir:alternate; dur:2000; loop:false');
            L01.setAttribute('opacity','1'); 
            L02.setAttribute('animation', 'property: position; to: 20 25 20; dir:alternate; dur:2000; loop:false');
            L02.setAttribute('opacity','1'); 
            // el.setAttribute('scale','from: 1 1 1; to: 2 2 0')
            el.components.sound.stopSound();
        }
        this.el.addEventListener('click',this.toggleevt);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.toggleevt);

    }
})
