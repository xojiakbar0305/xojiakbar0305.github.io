function getBotResponse(input) {
    //rock paper scissors
    if (input === "salom") {
        return "Assalamu alaykum";
    } else if (input === "ishlaringiz yaxshimi") {
        return "Allohga shukur rahmat 😊";
    } else if (input === "menga qilgan ishlaringizni ko'rsata olasizmi") {
        return "project linkini bosing";
    }

    // Simple responses
    if (input === "assalomu alaykum") {
        return "va alaykum assalomu!";
    } else if (input === "hayir") {
        return "salomat bo'ling!";
    } else {
        return "Boshqa xabar yozib ko'ring!";
    }
}