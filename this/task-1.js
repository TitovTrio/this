const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        switch (this.level) {
            case 1:
                this.level++
                this.stack.push('CSS')
                break;
            case 2:
                this.level++
                this.stack.push('JavaScript')
                break;
            case 3:
                this.level++
                this.stack.push('React')
                break;
            case 4:
                this.level++
                this.stack.push('NodeJS')
                break;
            case 5:
                alert('Студент выучил все технологии')
        }
        return this;
    }
};

student
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()

console.log(student.stack)