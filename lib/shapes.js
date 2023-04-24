class Shape {
    color;
    text; 
    textColor;
    setColor(color) {
        this.color = color;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    setText(text) {
        this.text = text;
    }
}

class Square extends Shape {

    render() {
        return `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg"  width="${200}" height = "${200}">
    <rect width="${200}" height="${200}" style="fill:${this.color};"/>
    <text x="${200/2}" y="${200/2}" font-size="50" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
</svg>`
    }
}
class Triangle extends Shape {
    
        render() {
            return `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" width="${200}" height = "${200}">
<polygon points="${100},0 ${200},${200} 0,${200}" style="fill:${this.color};"/>
<text x="${200/2}" y="${200/2}" font-size="50" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
</svg>` 
        }
    }

class Circle extends Shape {
    render() {
        return `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" width="${200}" height = "${200}">
<circle cx="${100}" cy="${100}" r="${80}" style="fill:${this.color};"/>
<text x="${200/2}" y="${200/2}" font-size="50" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
</svg>`
    }
}
module.exports = { Square, Triangle, Circle };