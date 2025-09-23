import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/store/cart';
import { 
  CreditCard, 
  Smartphone, 
  Building2, 
  ChevronRight,
  Check,
  MapPin,
  Package,
  User
} from 'lucide-react';
import { toast } from 'sonner';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState({
    // Personal info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Shipping
    address: '',
    city: '',
    postalCode: '',
    // Payment
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    mobileProvider: '',
    mobileNumber: '',
    bankName: '',
    accountNumber: ''
  });

  const subtotal = getTotalPrice();
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;
  const totalMWK = total * 1000; // Convert USD to MWK (example rate)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const simulatePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Payment successful! Your order has been placed.');
    clearCart();
    setIsProcessing(false);
    setStep(5); // Success step
    
    setTimeout(() => {
      onClose();
      setStep(1);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        cardNumber: '',
        cardName: '',
        expiry: '',
        cvv: '',
        mobileProvider: '',
        mobileNumber: '',
        bankName: '',
        accountNumber: ''
      });
    }, 3000);
  };

  const formatMWK = (amount: number) => {
    return new Intl.NumberFormat('en-MW', {
      style: 'currency',
      currency: 'MWK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Personal Information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+265 999 123 456"
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Shipping Address</h3>
            </div>
            <div>
              <Label htmlFor="address">Street Address</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Main Street"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Lilongwe"
                  required
                />
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="30100"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Payment Method</h3>
            </div>
            
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 border rounded-lg p-3 cursor-pointer hover:bg-accent">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                    <CreditCard className="h-4 w-4" />
                    Card Payment
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border rounded-lg p-3 cursor-pointer hover:bg-accent">
                  <RadioGroupItem value="mobile" id="mobile" />
                  <Label htmlFor="mobile" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Smartphone className="h-4 w-4" />
                    Mobile Money
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border rounded-lg p-3 cursor-pointer hover:bg-accent">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Building2 className="h-4 w-4" />
                    Bank Transfer
                  </Label>
                </div>
              </div>
            </RadioGroup>

            <Separator />

            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div>
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'mobile' && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="mobileProvider">Mobile Money Provider</Label>
                  <select
                    id="mobileProvider"
                    name="mobileProvider"
                    value={formData.mobileProvider}
                    onChange={(e) => setFormData({ ...formData, mobileProvider: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Select Provider</option>
                    <option value="airtel">Airtel Money</option>
                    <option value="tnm">TNM Mpamba</option>
                    <option value="mpamba">Mpamba</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="mobileNumber">Mobile Number</Label>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="+265 999 123 456"
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'bank' && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="bankName">Bank Name</Label>
                  <select
                    id="bankName"
                    name="bankName"
                    value={formData.bankName}
                    onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Select Bank</option>
                    <option value="standard">Standard Bank</option>
                    <option value="national">National Bank</option>
                    <option value="fmb">FMB Bank</option>
                    <option value="nbs">NBS Bank</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    placeholder="1234567890"
                  />
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Package className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Order Summary</h3>
            </div>
            
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} x {item.quantity}
                  </span>
                  <span>{formatMWK((item.salePrice || item.price) * item.quantity * 1000)}</span>
                </div>
              ))}
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatMWK(subtotal * 1000)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : formatMWK(shipping * 1000)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-primary">{formatMWK(totalMWK)}</span>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg p-4 space-y-2 text-sm">
              <p><span className="font-semibold">Delivery:</span> {formData.address}, {formData.city}</p>
              <p><span className="font-semibold">Payment:</span> {
                paymentMethod === 'card' ? 'Card ending in ' + formData.cardNumber.slice(-4) :
                paymentMethod === 'mobile' ? formData.mobileProvider + ' - ' + formData.mobileNumber :
                formData.bankName + ' - ' + formData.accountNumber
              }</p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center py-8">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Order Confirmed!</h3>
            <p className="text-muted-foreground mb-4">
              Thank you for your order. We'll send you a confirmation email shortly.
            </p>
            <p className="text-sm text-muted-foreground">
              Order #: {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
        );
    }
  };

  const stepTitles = ['Personal Info', 'Shipping', 'Payment', 'Review', 'Complete'];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-6">
          {stepTitles.map((title, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                  step > index + 1
                    ? 'bg-primary text-primary-foreground'
                    : step === index + 1
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {step > index + 1 ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              {index < stepTitles.length - 1 && (
                <div
                  className={`mx-2 h-0.5 w-12 ${
                    step > index + 1 ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="min-h-[400px]">
          {renderStep()}
        </div>

        {step < 5 && (
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
            >
              Back
            </Button>
            {step === 4 ? (
              <Button
                className="bg-primary hover:bg-primary-hover"
                onClick={simulatePayment}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Pay ${formatMWK(totalMWK)}`}
              </Button>
            ) : (
              <Button
                className="bg-primary hover:bg-primary-hover"
                onClick={handleNext}
              >
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;