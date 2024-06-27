

export const CalculerScoreA = (data)=>{


let currentDate = new Date();
let currentYear = currentDate.getFullYear();
const dateDeNaissance = new Date(data.dateDeNaissance);
const Ddn = dateDeNaissance.getFullYear();


    const MG = (data.M1 + data.M2)/2

const M = MG >= 15 ? 100 : (MG > 10 ? 20*(MG-10) : 0)

    const r1 = (data.Rang1-1)/data.NbEtdudiant1
    const r2 = (data.Rang2-1)/data.NbEtdudiant2

    const ri1 = (r1 < 0.3) ? 100-(700*r1)/3 : 0 
    const ri2 = (r2 < 0.3) ? 100-(700*r2)/3 : 0 

    const R = 0.5 *(ri1 + ri2)

    const FR =  data.Mfr1 + data.Mfr2
    const ML = (data.Manglais1 + data.Manglais2 + FR)/4

    const B1 = Ddn >= (currentYear-22) ? 5 : 0 ;

    const B2 = data.Mbac >= 16 ? 20 : (data.Mbac >=15 ? 15 : (data.Mbac >=12 ? 10 : (data.Mbac > 11 ? 5 :0)))


    const scoreA = 0.2*M +1.4*R/3 +5*ML/6 + 2*(B1+B2)/3

    return scoreA
}