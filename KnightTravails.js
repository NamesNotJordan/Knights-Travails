export default function KnightMoves(start= [], end=[]){
    const possibleMoves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
    const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;
    const stringToCoordinates = (string) => string.split(',').Map(Number);


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
    console.log(path);
    console.log(`The knight took ${path.length() -1} moves`);
}