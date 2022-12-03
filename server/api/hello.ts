export default defineEventHandler((event) => {
    console.log("Meine Environment Variables:")
    console.log(process.env)
    console.log("-----------------\n")
    return 'Hello World!';

})
