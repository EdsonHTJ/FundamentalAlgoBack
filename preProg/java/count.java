class Main {  
  public static void main(String args[]) { 
    int a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
    int cut = 5;
    int count = 0;
    for(int i = 0; i < a.length; i++){
      if (a[i] > cut) {
        count++;
      }
    }

    System.out.println(count);
  } 
}