import HolbertonCourse from "./2-hbtn_course.js";

try {
    const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
    console.log(c1.name);
    c1.name = "Python 101";
    console.log(c1);

    try {
        c1.name = 12; // This will throw a TypeError
    } catch (err) {
        console.log(err.message);
    }

    try {
        c1.length = "1"; // This will throw a TypeError
    } catch (err) {
        console.log(err.message);
    }

    try {
        const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]); // This will throw a TypeError
    } catch (err) {
        console.log(err.message);
    }
} catch (err) {
    console.log(err.message);
}
