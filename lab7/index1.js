// 1-

const courseInfo = (course = {}) => {
    const defaultValues = {
        courseName: 'null',
        courseDuration: 'null',
        courseOwner: 'null'
    };
    Object.assign(defaultValues,course);
    console.log(defaultValues)
}

courseInfo({
    courseName: 'assas',
    courseDuration: 'asdasda',
    courseOwner: 'asdasda'
})


