/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######


loop {counter} number of times
    loop {counter} number of times 
    increment {counter} to 1

*/


for (let counter = 1; counter <= 7; counter++) {
    let text = ''
    while (text.length < counter) {
        text = text + '#'
    }
    console.log(text)

}

