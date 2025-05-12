
public class Maker extends Vehicle{
	
	String maker_name ="현대";
	
	public Maker(String mn) {
		maker_name = mn;
	}
	
	public void byeACar(String mn) {
		maker_name = mn;
	}
	
	public static void main(String[] args) {
		Maker mk = new Maker("기아");
		System.out.println("speed"+mk.speed);
		System.out.println("speed"+mk.maker_name);
		mk.excel();
		mk.byeACar("포르쉐");
		System.out.println("speed"+mk.speed);
		System.out.println("speed"+mk.maker_name);
	}
}
