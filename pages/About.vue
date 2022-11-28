<template>
    <div class=" max-w-screen-xl mx-auto text-center ">
        <p class="font-bold text-xl p-6 ">About</p>
        <p class=" max-w-screen-lg mx-auto ">
            Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
        </p>
        <br>
        <p class="font-bold text-xl ">Best Of Verses</p>
        <br>
        <figure class="max-w-screen-lg mx-auto">
            <blockquote>
                <p>
                    Die ältere Schwester ging zur jüngeren und sagte:<br> »Hör zu, ich habe diese Nacht mit unserem Vater geschlafen. Das Beste ist, wir machen ihn heute wieder betrunken und du schläfst auch mit ihm, damit es sicher ist, dass unsere Familie erhalten bleibt.«
                </p>
            </blockquote>
            <figcaption>— 1. Mose, <cite>19:34 HFA</cite></figcaption>
        </figure>
        <br>
        <figure class="max-w-screen-lg mx-auto">
            <blockquote>
                <p>
                    Hat er aber die Wahrheit gesagt und hat man keinen Beweis erbringen können, dass die Frau noch Jungfrau war dann soll man sie vor die Tür ihres Elternhauses führen, und die Männer der Stadt sollen sie dort steinigen. Sie muss sterben, weil sie sich im Haus ihrer Eltern wie eine Hure verhalten hat. Das ist eine Schande für ganz Israel. Ihr müsst alles Böse aus eurem Volk beseitigen!               </p>
            </blockquote>
            <figcaption>— 5. Mose, <cite>22:20-21 HFA</cite></figcaption>
        </figure>
        <br>
        <figure class="max-w-screen-lg mx-auto">
            <blockquote>
                <p>
                    Niemand darf mit der Frau seines Vaters schlafen. Sonst entehrt er seinen Vater.
                </p>
            </blockquote>
            <figcaption>— 5. Mose, <cite>23:1 HFA</cite></figcaption>
        </figure>
        <br>
        <figure class="max-w-screen-lg mx-auto">
            <blockquote>
                <p>
                    Wenn zwei Männer sich schlagen und die Frau des Unterlegenen kommt ihrem Mann zu Hilfe und greift dem anderen an die Geschlechtsteile soll man ihr ohne Mitleid die Hand abhauen.
                </p>
            </blockquote>
            <figcaption>— 5. Mose, <cite>25:11-12 HFA</cite></figcaption>
        </figure>
        <br>
        <figure class="max-w-screen-lg mx-auto">
            <blockquote>
                <p>
                    Wieder packte sie die Gier nach ihren früheren Liebhabern, deren Glied so groß war wie das eines Esels und die so brünstig waren wie ein Hengst.                </p>
            </blockquote>
            <figcaption>— Hesekiel, <cite>23:20 HFA</cite></figcaption>
        </figure>
        <br>
    </div>
</template>

<script setup>
console.log("hi")
const fetchLibrairy = async () => {
    const { pray }  = await $fetch('/api/test')
    console.log(pray)
}
fetchLibrairy()

</script>

<style scoped>

</style>
