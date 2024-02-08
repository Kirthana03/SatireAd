AFRAME.registerComponent('Left-toggle',{
    init: function() {
        let el = this.el;
        var Kcl = document.querySelector('#EL01');
        var C01 = document.querySelector('#C1');

        this.toggleLeft = function() {
            console.log('clicked');

            Kcl.setAttribute('animation', 'property: rotation; to: -70 360 0; dir:alternate; dur:2000; loop:true');
            C01.setAttribute('animation', 'property: position; to: -140 0 50; dir:alternate; dur:2000; loop:false');

            el.components.sound.stopSound();
        }
        this.el.addEventListener('click',this.toggleLeft);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.toggleLeft);

    }
})
