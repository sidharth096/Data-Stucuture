class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    addWord(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!current.children[char]) {
          current.children[char] = new TrieNode();
        }
        current = current.children[char];
      }
      current.isEndOfWord = true;
    }
  
    getWordsWithPrefix(prefix) {
      let current = this.root;
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!current.children[char]) {
          return [];
        }
        current = current.children[char];
      }
      return this._collectWords(current, prefix);
    }
  
    _collectWords(node, prefix) {
      let words = [];
      if (node.isEndOfWord) {
        words.push(prefix);
      }
      for (const child in node.children) {
        const newPrefix = prefix + child;
        words = words.concat(this._collectWords(node.children[child], newPrefix));
      }
      return words;
    }
  }
  const a=new Trie()
  a.addWord("soap")
  a.addWord("song")
  a.addWord("oats")
  a.addWord("oall")
  a.addWord("sons")
  console.log(a);
  let d=a.getWordsWithPrefix("soa")
  console.log(d);
