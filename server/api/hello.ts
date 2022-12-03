export default defineEventHandler((event) => {
    console.log(process.env)
    console.log("-----------------")
    return 'Hello World!';

})
