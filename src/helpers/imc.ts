export type level1 = {
    title: String;
    color: string;
    icon: 'down' | 'up';
    imc: number[],
    yourImc?: number;
}

export const levels: level1[] = [
    { title: 'MAGREZA', color: '#96A3AB', icon: "down", imc: [0, 18.5] },
    { title: 'NORMAL', color: '#0EAD69', icon: "up", imc: [18.6, 24.9] },
    { title: 'SOBREPESO', color: '#E2B039', icon: "down", imc: [25, 30] },
    { title: 'OBESIDADE', color: '#C3423F', icon: "down", imc: [30.1, 99] }

];
 
export const calculteIMC = (height: number, weight: number) => {
    const imc = weight / (height * height)

    for (let i in levels) {
        if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            let levelsCopy = {...levels[i]}
            levelsCopy.yourImc = parseFloat(imc.toFixed(2))
           
            return levelsCopy;
        }
    }
    return null;
}
