export const removeNode = node => {
    node.parentNode.removeChild(node);
}

export const append = (newEle, contianer) => {
    contianer.appendChild(newEle);
}

export const insetBefore = (newEle, oldEle) => {
    oldEle.parentNode.insetBefore(newEle, oldEle);
}