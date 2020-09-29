let calculateGrade = (studentScore, maxScore) => {

        if (typeof studentScore !== "number" || typeof maxScore !== "number") {
            console.log(`I can only work with numbers.`);
            return;
        }

        if (studentScore < 0 || maxScore < 0) {
            console.log(`Score can't be negative.`);
            return;
        }

        if (studentScore > maxScore) {
            console.log(`Student score (${studentScore}) can't be grater than (${maxScore})`);
            return;
        }

        let percentage = (studentScore / maxScore) * 100;
        let letterGrade = '';

        if (percentage >= 90) {
            letterGrade = 'A';
        } else if (percentage >= 80) {
            letterGrade = `B`;
        } else if (percentage >= 70) {
            letterGrade = `C`;
        } else if (percentage >= 60) {
            letterGrade = `D`;
        } else {
            letterGrade = `F`;
        }
        const output = `You got a ${letterGrade} (${percentage}%)`;
        //console.log(output);

        return letterGrade;
};
    module.exports = calculateGrade;