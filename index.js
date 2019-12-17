function print(n){
    for (let i = 1; i <=n ; i++){
        let col = i
        for(let j = 1; j <= n-col; j++){
            process.stdout.write('_');
           
        }
        for(let k = 1; k < col; k++){
            process.stdout.write('*');
        }
        for(let y = 1; y <col+1; y++){
            process.stdout.write('*');
        }
        for(let z = 1; z<=n-col; z++){
            process.stdout.write('_');
        }
        process.stdout.write('\n');
    }
}
print(6)
