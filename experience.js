function calculateExperience() {
    const startDate = new Date('2024-08-20');
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    if (currentDate.getDate() < startDate.getDate()) {
        months--;
        if (months < 0) {
            years--;
            months = 11;
        }
    }
    
    return { years, months };
}

function generateSVG() {
    const { years, months } = calculateExperience();
    const text = years === 0 ? `${months} мес` : `${years} г ${months} мес`;
    
    return `
    <svg width="200" height="30" xmlns="http://www.w3.org/2000/svg">
        <style>
            .text { font: 12px sans-serif; fill: #fff; }
            .background { fill: #2d333b; rx: 5; }
        </style>
        <rect class="background" width="200" height="30"/>
        <text x="100" y="18" text-anchor="middle" class="text">💼 Опыт: ${text}</text>
    </svg>`;
}
