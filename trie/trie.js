class Trie {
    constructor() {
      this.root = {};
    }
    add(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        if (!node[word[i]]) {
          node[word[i]] = {};
        }
        node = node[word[i]];
      }
      node.end = true;
    }                   
    search(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        if (!node[word[i]]) {
          return false;
        }
        node = node[word[i]];
      }
      return node.end === true;
    }
    startsWith(prefix) {
      let current = this.root;
      for (const char of prefix) {
        if (!current[char]) {
          return false;
        }
      
        current = current[char];
      }
      return true;
    }
    getWordsWithPrefix(prefix) {
      let node = this.root;
      for (let i = 0; i < prefix.length; i++) {
        if (!node[prefix[i]]) {
          return [];
        }
        node = node[prefix[i]];
      }
      return this._collectWords(node, prefix);
    }
  
    _collectWords(node, prefix) {
      let words = [];
      if (node.end) {
        words.push(prefix);
      }
      for (const child in node.children) {
        const newPrefix = prefix + child;
        words = words.concat(this._collectWords(node.children[child], newPrefix));
      }
      return words;
    }
  
  }
  const trie = new Trie();
  
  trie.add("JISHNU");
  trie.add("JISUS");
  console.log(trie);
  //  console.log(trie.search("JIS")); 

  // console.log(trie.startsWith("J"));
  let d=trie.getWordsWithPrefix("J")
  console.log(d);