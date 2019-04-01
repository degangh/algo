
exports.arr = function () {
    if (!process.argv[2]) return []
    return process.argv[2].split(',').map(
        function (i){
            return Number(i)
        }
    )
}


