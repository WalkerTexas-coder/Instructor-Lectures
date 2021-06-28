album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'



#turn vowels into a variable with the string listing out the vowels 
#use .chars string method to seperate the string 
#use the "-" to the vowels to delete them. 
# use the .join array method to put string back together into a word 
#had to do a little bit of research on this but ultimately used it and understood what each method was doing. 
vowels = 'aeiou'
puts (album1.chars - vowels.chars).join
puts (album2.chars - vowels.chars).join
puts (album3.chars - vowels.chars).join