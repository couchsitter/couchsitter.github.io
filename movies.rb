movies = {
    Drive: 5
    }
puts "Movie hashing tiem! Possible inputs:"
puts "To add a movie to the hash, type 'add' without quotes"
puts "To update a listing, type 'update' without quotes"
puts "Type 'display' to look at the ratings of movies already in the hash"
puts "To delete an entry, type 'delete'"
choice = gets.chomp

case choice 
when "add" 
    puts "Title:"
    title = gets.chomp
    puts "Rating (1-5):"
    rating = gets.chomp
         if movies[title.to_sym].nil? == true
            movies[title.to_sym] = rating.to_i
        else  puts "This movie already exists in the hash!"
        end
 when "update" 
    puts "Title of movie to update"
    title = gets.chomp
        if movies[title.to_sym].nil? == true
            puts "I'm sorry, this movie is not currently in the hash, but it can be Added"
        else puts "Rating to change:"
            rating = gets.chomp
            movies[title.to_sym] = rating.to_i
        end
when "display" 
    movies.each do |movie, rating|
        puts "#{movie}: #{rating}"
    end
when "delete" 
    puts "Please enter the movie you wish to delete:"
    title = gets.chomp
    if movies[title.to_sym].nil? == true
        puts "I'm sorry, but I can't delete this movie since it is not in the hash!"
    else movies.delete(title.to_sym)
end
    movies.delete(title)
else 
    puts "I'm sorry, that command is not recognized. Please follow the instructions more carefully next time"
end