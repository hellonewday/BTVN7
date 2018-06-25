export const age = (tuoi) => {
    if (tuoi < 18){
        tuoi = 'Chưa vị thành niên';
    } 
    else {
        tuoi = 'Vi thành niên';
    }
}
export const BMI = (cao, nang) =>{
     return 'Chỉ số BMI là' + (nang /(cao*cao));
}
