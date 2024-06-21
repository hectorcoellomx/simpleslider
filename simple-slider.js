/**
 * SimpleSlider
 * Author: Héctor de Jesús Coello <hector_m3@live.com.mx>
 * Created: 2024-06-20
 * Description: A simple responsive image slider with configurable parameters.
 */

class SimpleSlider {
    constructor(config) {
        this.container = document.querySelector(config.container);
        this.itemWidth = config.itemWidth;
        this.itemHeight = config.itemHeight;
        this.marginPx = config.margin;
        this.maxView = config.maxView;
        
        // Responsive
        for (let index = this.maxView; index > 1; index--) {
            if (document.documentElement.clientWidth < ((this.itemWidth + this.marginPx) * index)) {
                this.maxView = index - 1;
            }
        }

        this.init();
    }

    init() {
        this.pos = 0;
        this.space = this.marginPx * 2;
        this.sizeTotal = this.itemWidth + this.space;
        this.ul = this.container.querySelector('ul');
        this.liItems = this.container.querySelectorAll('li');
        let liCount = 0;

        this.liItems.forEach((item) => {
            liCount++;
            item.style.width = this.itemWidth + 'px';
            if (liCount > 1) {
                item.style.marginLeft = this.marginPx + 'px';
            }
            if (liCount < this.liItems.length) {
                item.style.marginRight = this.marginPx + 'px';
            }
        });

        this.totalItems = this.liItems.length;
        this.container.style.height = this.itemHeight + 'px';
        this.container.style.maxWidth = ((this.maxView * this.sizeTotal) - this.space) + 'px';
        this.ul.style.width = ((this.liItems.length * this.sizeTotal) - this.space) + 'px';
    }

    move(orientation) {
        let newPos = this.pos + ((orientation === 'r') ? -1 : 1);
        let maxLeft = -1 * (this.totalItems - this.maxView);
        if (newPos < 1 && newPos >= maxLeft) {
            this.pos = newPos;
            this.ul.style.left = (this.pos * this.sizeTotal) + 'px';
        }
    }
}