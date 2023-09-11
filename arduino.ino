#define RED A3
#define GREEN A2
#define YELLOW A1
#define BUZZER A0

void setup() {
  Serial.begin(9600);
  pinMode(RED, OUTPUT);
  pinMode(GREEN, OUTPUT);
  pinMode(YELLOW, OUTPUT);
  pinMode(BUZZER, OUTPUT);
}

void loop() {
  if(Serial.available() > 0) {
    char data = Serial.read();
    if(!data) Serial.end();
    if(data == '1') digitalWrite(RED, HIGH);
    if(data == '2') digitalWrite(RED, LOW);
    if(data == '3') digitalWrite(GREEN, HIGH);
    if(data == '4') digitalWrite(GREEN, LOW);
    if(data == '5') digitalWrite(YELLOW, HIGH);
    if(data == '6') digitalWrite(YELLOW, LOW);
    if(data == '7') tone(BUZZER, 5000);
    if(data == '8') noTone(BUZZER);
  }

}
