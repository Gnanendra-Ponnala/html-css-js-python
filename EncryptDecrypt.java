public class EncryptDecrypt{
  public static void main(String... args){
    String en = "gnanendra";
    int key = 1;
    char[] chars = en.toCharArray();
    for(char c : chars){
      c += key; 
      System.out.print(c);
    }
  }
   // make c-=key;
}
