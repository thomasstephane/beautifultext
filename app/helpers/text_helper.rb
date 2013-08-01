helpers do
  def beautiful(text)
    letters = text.split(//)
    analyze(letters)
  end

  def analyze(letters)
    result = {:spaces_added => [], :spaces_removed => []}
    letters.each_with_index do |l, i|
      case
      when l == "." && i != letters.length - 1
        if letters[i+1] != " " && letters[i+1] != "."
          letters.insert(i + 1, " ")
          result[:spaces_added] << (i + 1)
        end
      when l == " " && i > 0
        result[:spaces_removed] << i if letters[i-1] == " "
      end
    end
    result[:beautiful_text] = letters
    result
  end

end
