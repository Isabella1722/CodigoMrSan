class Login {
    constructor() {
        this.incrementPosY = 0;
        this.arrayInputs = [];
        this.string;
        for (let i = 0; i < 2; i++) {
            this.arrayInputs[i] = new Input(57, 399 + this.incrementPosY, 260);
            this.incrementPosY += 75;
        }
        for (let i = 0; i < this.arrayInputs.length; i++) {
                this.string = this.arrayInputs[i].getText();
            }
        
    }

    paint() {
        for (let i = 0; i < this.arrayInputs.length; i++) {
            this.arrayInputs[i].paint();
            if (i != 1) {
                this.arrayInputs[i].displayText();
            } else {
                this.arrayInputs[i].displayPassword();
            }
        }
    }

    focusInputs(mX, mY) {
        for (let i = 0; i < this.arrayInputs.length; i++) {
            if (mX >= this.arrayInputs[i].getPosX() && mX <= this.arrayInputs[i].getPosX() + 260
                && mY >= this.arrayInputs[i].getPosY() && mY <= this.arrayInputs[i].getPosY() + 20) {
                this.arrayInputs[i].setFocus(true);
            } else {
                this.arrayInputs[i].setFocus(false);
            }
        }
    }

    writeTextInput(k) {
        for (let i = 0; i < this.arrayInputs.length; i++) {
            if (this.arrayInputs[i].isFocus() && this.arrayInputs[i].getText().length < 25) {
                this.arrayInputs[i].setText(this.arrayInputs[i].getText() + k);
                //this.string = this.arrayInputs[i].getText();
            }
        }
    }

    eraseTextInput() {
        for (let i = 0; i < this.arrayInputs.length; i++) {
            if (this.arrayInputs[i].isFocus() && this.arrayInputs[i].getText().length - 1 >= 0) {
                let indice = this.arrayInputs[i].getText().length - 1;
                this.arrayInputs[i].setText(this.arrayInputs[i].getText().substring(0, indice));
            }
        }
    }
}