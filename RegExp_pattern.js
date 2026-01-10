1. Creation Methods
Literal Notation: /pattern/flags. Compiled when the script is loaded; best for static patterns.
Constructor: new RegExp("pattern", "flags"). Compiled at runtime; essential for dynamic patterns, such as those built from user input. 
  
2. Core Syntax & Modern Features (2026)
Character Classes: \d (digit), \w (alphanumeric/underscore), \s (whitespace).
Anchors: ^ (start of string), $ (end of string), and \b (word boundary).
Lookarounds: Assert conditions without consuming characters.
Positive Lookahead: (?=...).
Positive Lookbehind: (?<=...) (available in modern browsers).
Named Capturing Groups: Use (?<name>pattern) to label matches, making results easier to read via match.groups.name. 
  
3. Essential Flags
Flag 	Name	Description
g	Global	Finds all matches, not just the first.
i	Ignore Case	Makes the pattern case-insensitive.
m	Multiline	Treats ^ and $ as start/end of each line.
s	DotAll	Allows . to match newline characters.
u / v	Unicode	Enables full Unicode support; v is the newer, more powerful mode (standard as of 2025).
  
4. Primary Methods
RegExp.test(string): Returns true if a match exists.
RegExp.exec(string): Returns an array of match details or null.
String.match(regex): Retrieves matches from a string.
String.replace(regex, replacement): Replaces matched text with a new substring or function result. 
  
5. Best Practices (2026)
Avoid Over-matching: Use specific character classes instead of .* to prevent performance issues like catastrophic backtracking.
Cache Regex: For high-performance needs, define constant regex literals outside of loops to avoid repeated compilation.
Use String.includes(): For simple exact matches, built-in string methods are faster than RegExp.


1. Common Regex Patterns (Platform-Agnostic)
These patterns represent the logic used in all three languages:

Email Validation: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

Extract All Digits: \d+

  Username (Alphanumeric, 3-16 chars): ^[a-zA-Z0-9_]{3,16}$

Password Complexity (Min 8 chars, 1 uppercase, 1 digit): ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$ 


2. JavaScript Examples

JavaScript uses /pattern/flags for literals.
Validation (test):

javascript
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("user@example.com")); // true
Use code with caution.

Extraction (match):
javascript
const text = "Order #123 and #456";
const numbers = text.match(/\d+/g); // ["123", "456"]
Use code with caution.

Replacement (replace):
javascript
const secret = "My ID is 98765";
const masked = secret.replace(/\d/g, "*"); // "My ID is *****"
Use code with caution.



3. Python Examples
Python requires the re module and typically uses raw strings (r'...') for patterns. 
Search and Extract (findall):
python
import re
text = "Emails: a@b.com, c@d.org"
emails = re.findall(r'[\w\.-]+@[\w\.-]+\.\w+', text)
print(emails) # ['a@b.com', 'c@d.org']
Use code with caution.

Validation (match):
python
if re.match(r'^\+91\d{10}$', "+919876543210"):
    print("Valid Indian phone number")
Use code with caution.

Named Groups (group):
python
match = re.search(r'(?P<year>\d{4})-(?P<month>\d{2})', '2026-01')
print(match.group('year')) # 2026
Use code with caution.

4. Java Examples
Java uses the Pattern and Matcher classes. Note that backslashes must be doubled (\\). 
Pattern Compilation and Validation:
java
import java.util.regex.*;

public class Main {
    public static void main(String[] args) {
        Pattern p = Pattern.compile("^[A-Z].*\\.$"); // Starts with capital, ends with dot
        Matcher m = p.matcher("Hello world.");
        System.out.println(m.matches()); // true
    }
}
Use code with caution.

Splitting Strings:
java
String text = "java;python,javascript|cpp";
String[] langs = text.split("[,;|]"); // Splits on any of these delimiters
Use code with caution.

Global Replacement:
java
String input = "Call 123-456";
String result = input.replaceAll("\\d", "X"); // "Call XXX-XXX"
  
