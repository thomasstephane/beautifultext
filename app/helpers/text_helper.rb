helpers do
  def beautiful(text)
    letters = text.split(//)
    analyze(letters)
  end

  def analyze(letters)
    result = {:changes => []}
    letters.each_with_index do |l, i|
      if l == "." && i != letters.length - 1
        if letters[i+1] != " " && letters[i+1] != "."
          letters.insert(i + 1, " ")
          result[:changes] << (i + 1)
        end
      end
    end
    result[:beautiful_text] = letters
    result
  end

end
