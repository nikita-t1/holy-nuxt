export default defineEventHandler((event) => {
    console.log(process.env)
    console.log("-----------------")
    console.log("Meine SupaBase URL ist:")
    console.log(".SUPABASE_URL=" + process.env.SUPABASE_URL)
    return 'Hello World!';

})
