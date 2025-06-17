export default function KnightMoves(start= [], end=[], useChessNotation = false){
    const possibleMoves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
    const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;
    const stringToCoordinates = (string) => string.split(',').Map(Number);
    const formatToChessNotation = (path) => {
        const letters = 'ABCDEFGH'.split('');
        return path.map(([x,y]) => {
            let col = letters[x];
            let row = y+1;
            return `${col}${row}`;
        })
    }


    const queue = [[...start]];
    const visited = new Set();
    const parentMap = new Map();
    visited.add(start.toString());

    while (queue) {
        const [x, y] = queue.shift();
        
        if (x === end[0] && y === end[1]) break;

        for (const [dx, dy] of possibleMoves) {
            const newX = x + dx;
            const newY = y + dy;
            const nextPositionString = [newX,newY].toString();

            if (isValid(newX, newY) && !visited.has(nextPositionString)){
                queue.push([newX, newY]);
                visited.add(nextPositionString);
                parentMap.set(nextPositionString, [x, y].toString());
            }
        }
    }
    // Get path to target
    const path = [];
    let currentSquare = end.toString();
    while (currentSquare != start.toString()){
        path.push(stringToCoordinates(currentSquare));
        currentSquare = parentMap.get(currentSquare);
    }
    path.push(start);
    path.reverse();
    if(useChessNotation){
        console.log(formatToChessNotation(path));
    } else{
        console.log(path);
    }
    console.log(`The knight took ${path.length() -1} moves`);
}