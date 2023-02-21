function findFirstMatchingElement(parentEle, cb) {
    // do a depth-first search to recursively find the first element in the tree
    // that will return true when passed into the cb function
    if (cb(parentEle)) {
        return parentEle;
    }

    for (let i = 0; i < parentEle.children.length; i++) {
        const result = findFirstMatchingElement(parentEle.children[i], cb);
        if (result) return result;
    }

    return null;
}

function findAllMatchingElements(parentEle, cb) {
    // recursively find all elements in the tree that will return true when
    // passed into the cb function (depth-first search)
    let results = [];
    if (cb(parentEle)) {
        results.push(parentEle);
    }

    for (let i = 0; i < parentEle.children.length; i++) {
        const childResults = findAllMatchingElements(parentEle.children[i], cb);
        if (childResults.length) results = results.concat(childResults);;
    }

    return results;
}


export function findElementById(id) {
    //!!END
    // Return the element in the DOM with corresponding `id`

    //!!START
    return findFirstMatchingElement(document.body, function (ele) {
        return ele.id === id;
    });
    //!!END
}

export function findFirstElementOfTag(tag) {
    //!!END
    // Return the first occurence of an element of tag name `tag`

    //!!START
    return findFirstMatchingElement(document.body, function (ele) {
        return ele.tagName === tag;
    });
    //!!END
}

export function findFirstElementOfClass(cls) {
    //!!END
    // Return the first occurence of an element of class `cls`

    //!!START
    return findFirstMatchingElement(document.body, function (ele) {
        return ele.classList.contains(cls);
    });
    //!!END
}

export function findElementsOfTag(tag) {
    //!!END
    // Return an array of elements that have a tag name of `tag`

    //!!START
    return findAllMatchingElements(document.body, function (ele) {
        return ele.tagName === tag;
    });
    //!!END
}

export function findElementsOfClass(cls) {
    //!!END
    // Return an array of elements that have are of class `cls`

    //!!START
    return findAllMatchingElements(document.body, function (ele) {
        return ele.classList.contains(cls);
    });
    //!!END
}
