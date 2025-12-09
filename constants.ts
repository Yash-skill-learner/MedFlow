
import { Category, Medicine } from './types';

const DISTRIBUTORS = [
  'Sun Pharma Distributors',
  'Apollo Supply Chain',
  'Cipla Global',
  'MedLife SCM',
  'Dr. Reddy Labs'
];

// Helper to generate medicines
const generateMedicines = (): Medicine[] => {
  const medicines: Medicine[] = [];
  let idCounter = 1;

  const createMed = (name: string, generic: string, cat: Category, price: number, stock: number, dosage: string, desc: string) => {
    // Convert base price to INR roughly (multiplying by 80 for realism from previous USD)
    const sellingPrice = Math.round(price * 80); 
    const mrp = Math.round(sellingPrice * 1.25); // MRP is 25% higher than selling price
    const hasOffer = Math.random() > 0.7; // 30% chance of having an offer
    const distributor = DISTRIBUTORS[Math.floor(Math.random() * DISTRIBUTORS.length)];

    medicines.push({
      id: idCounter.toString(),
      name,
      genericName: generic,
      category: cat,
      price: sellingPrice,
      mrp: mrp,
      costPrice: Number((sellingPrice * 0.7).toFixed(2)), // 30% margin approx
      stock,
      dosage,
      description: desc,
      distributor,
      hasOffer,
      offerDescription: hasOffer ? `Flat ${(10 + Math.floor(Math.random() * 15))}% OFF from ${distributor}` : undefined
    });
    idCounter++;
  };

  // Analgesics (20)
  createMed('Tylenol Extra Strength', 'Acetaminophen', Category.ANALGESICS, 9.99, 120, '500mg', 'Pain reliever and fever reducer.');
  createMed('Advil Liqui-Gels', 'Ibuprofen', Category.ANALGESICS, 12.50, 85, '200mg', 'NSAID for pain relief.');
  createMed('Aleve', 'Naproxen Sodium', Category.ANALGESICS, 14.20, 60, '220mg', 'Long-lasting pain relief.');
  createMed('Motrin IB', 'Ibuprofen', Category.ANALGESICS, 11.00, 90, '200mg', 'Relief for minor aches and pains.');
  createMed('Excedrin Migraine', 'Acetaminophen/Aspirin/Caffeine', Category.ANALGESICS, 13.50, 45, '250mg', 'Migraine relief.');
  createMed('Bayer Aspirin', 'Aspirin', Category.ANALGESICS, 8.99, 150, '325mg', 'Pain relief and heart health regimen.');
  createMed('Panadol', 'Acetaminophen', Category.ANALGESICS, 7.50, 200, '500mg', 'Gentle on stomach pain relief.');
  createMed('Voltaren Gel', 'Diclofenac', Category.ANALGESICS, 18.99, 30, '1%', 'Topical arthritis pain relief.');
  createMed('Midol Complete', 'Acetaminophen/Caffeine/Pyrilamine', Category.ANALGESICS, 10.50, 60, '500mg', 'Menstrual symptom relief.');
  createMed('Pamprin', 'Acetaminophen', Category.ANALGESICS, 9.75, 50, '500mg', 'Multi-symptom menstrual relief.');
  createMed('Bengay Cream', 'Menthol', Category.ANALGESICS, 7.25, 80, '2 oz', 'Muscle pain relief cream.');
  createMed('Icy Hot Patch', 'Menthol', Category.ANALGESICS, 8.50, 100, '5 patches', 'Back pain relief patches.');
  createMed('Salonpas', 'Methyl Salicylate', Category.ANALGESICS, 11.99, 70, '60 patches', 'Pain relieving patches.');
  createMed('Aspercreme', 'Lidocaine', Category.ANALGESICS, 12.99, 55, '4 oz', 'Odor-free pain relief cream.');
  createMed('Biofreeze', 'Menthol', Category.ANALGESICS, 15.00, 40, '3 oz', 'Cold therapy pain relief.');
  createMed('Tiger Balm', 'Camphor/Menthol', Category.ANALGESICS, 6.99, 90, '18g', 'Extra strength pain relieving ointment.');
  createMed('Goody\'s Powder', 'Aspirin/Acetaminophen/Caffeine', Category.ANALGESICS, 5.99, 100, '50 powders', 'Fast pain relief powder.');
  createMed('BC Powder', 'Aspirin/Caffeine', Category.ANALGESICS, 6.50, 95, '50 powders', 'Fast acting headache relief.');
  createMed('Percogesic', 'Acetaminophen/Diphenhydramine', Category.ANALGESICS, 9.25, 30, '325mg', 'Pain reliever with sleep aid.');
  createMed('Legatrin PM', 'Acetaminophen', Category.ANALGESICS, 10.00, 25, '500mg', 'Lower body pain reliever.');

  // Antibiotics (15)
  createMed('Amoxil', 'Amoxicillin', Category.ANTIBIOTICS, 15.00, 40, '500mg', 'Treats bacterial infections.');
  createMed('Zithromax', 'Azithromycin', Category.ANTIBIOTICS, 25.00, 25, '250mg', 'Z-Pak for infections.');
  createMed('Augmentin', 'Amoxicillin/Clavulanate', Category.ANTIBIOTICS, 35.00, 30, '875mg', 'Broad spectrum antibiotic.');
  createMed('Cipro', 'Ciprofloxacin', Category.ANTIBIOTICS, 28.50, 20, '500mg', 'Treats UTIs and other infections.');
  createMed('Keflex', 'Cephalexin', Category.ANTIBIOTICS, 18.75, 50, '500mg', 'Cephalosporin antibiotic.');
  createMed('Bactrim DS', 'Sulfamethoxazole/Trimethoprim', Category.ANTIBIOTICS, 12.00, 60, '800/160mg', 'Sulfa antibiotic.');
  createMed('Doxycycline', 'Doxycycline Hyclate', Category.ANTIBIOTICS, 22.00, 45, '100mg', 'Tetracycline antibiotic.');
  createMed('Flagyl', 'Metronidazole', Category.ANTIBIOTICS, 16.50, 35, '500mg', 'Treats anaerobic infections.');
  createMed('Clindamycin', 'Clindamycin HCl', Category.ANTIBIOTICS, 20.00, 40, '300mg', 'Lincosamide antibiotic.');
  createMed('Levaquin', 'Levofloxacin', Category.ANTIBIOTICS, 45.00, 15, '500mg', 'Fluoroquinolone antibiotic.');
  createMed('Macrobid', 'Nitrofurantoin', Category.ANTIBIOTICS, 26.00, 30, '100mg', 'Urinary tract antiseptic.');
  createMed('Penicillin VK', 'Penicillin V', Category.ANTIBIOTICS, 10.00, 80, '500mg', 'Standard penicillin.');
  createMed('Vibramycin', 'Doxycycline', Category.ANTIBIOTICS, 24.00, 40, '100mg', 'Antibiotic for various infections.');
  createMed('Minocin', 'Minocycline', Category.ANTIBIOTICS, 32.00, 20, '100mg', 'Treats acne and infections.');
  createMed('Biaxin', 'Clarithromycin', Category.ANTIBIOTICS, 40.00, 10, '500mg', 'Macrolide antibiotic.');

  // Cardiovascular (15)
  createMed('Lipitor', 'Atorvastatin', Category.CARDIOVASCULAR, 45.00, 60, '20mg', 'Lowers cholesterol.');
  createMed('Norvasc', 'Amlodipine', Category.CARDIOVASCULAR, 18.00, 100, '5mg', 'Calcium channel blocker.');
  createMed('Zestril', 'Lisinopril', Category.CARDIOVASCULAR, 12.50, 120, '10mg', 'ACE inhibitor for BP.');
  createMed('Cozaar', 'Losartan', Category.CARDIOVASCULAR, 22.00, 80, '50mg', 'ARB for high blood pressure.');
  createMed('Toprol XL', 'Metoprolol Succinate', Category.CARDIOVASCULAR, 25.00, 90, '50mg', 'Beta blocker for heart.');
  createMed('Plavix', 'Clopidogrel', Category.CARDIOVASCULAR, 60.00, 50, '75mg', 'Blood thinner.');
  createMed('Lasix', 'Furosemide', Category.CARDIOVASCULAR, 8.00, 100, '40mg', 'Diuretic water pill.');
  createMed('Crestor', 'Rosuvastatin', Category.CARDIOVASCULAR, 55.00, 40, '10mg', 'Stat for cholesterol.');
  createMed('Coreg', 'Carvedilol', Category.CARDIOVASCULAR, 28.00, 60, '12.5mg', 'Beta blocker.');
  createMed('Diovan', 'Valsartan', Category.CARDIOVASCULAR, 35.00, 50, '160mg', 'Blood pressure med.');
  createMed('Aldactone', 'Spironolactone', Category.CARDIOVASCULAR, 15.00, 70, '25mg', 'Diuretic.');
  createMed('Eliquis', 'Apixaban', Category.CARDIOVASCULAR, 120.00, 30, '5mg', 'Anticoagulant.');
  createMed('Xarelto', 'Rivaroxaban', Category.CARDIOVASCULAR, 130.00, 25, '20mg', 'Blood thinner.');
  createMed('Entresto', 'Sacubitril/Valsartan', Category.CARDIOVASCULAR, 150.00, 20, '49/51mg', 'Heart failure med.');
  createMed('Nitrostat', 'Nitroglycerin', Category.CARDIOVASCULAR, 40.00, 15, '0.4mg', 'For chest pain.');

  // Digestive (15)
  createMed('Pepto-Bismol', 'Bismuth Subsalicylate', Category.DIGESTIVE, 6.99, 95, '262mg', 'Antidiarrheal.');
  createMed('Tums', 'Calcium Carbonate', Category.DIGESTIVE, 5.49, 140, '1000mg', 'Antacid.');
  createMed('Prilosec OTC', 'Omeprazole', Category.DIGESTIVE, 22.99, 60, '20mg', 'Acid reducer.');
  createMed('Nexium', 'Esomeprazole', Category.DIGESTIVE, 24.99, 55, '20mg', 'Heartburn relief.');
  createMed('Imodium A-D', 'Loperamide', Category.DIGESTIVE, 12.99, 70, '2mg', 'Anti-diarrheal.');
  createMed('Metamucil', 'Psyllium Husk', Category.DIGESTIVE, 18.50, 40, '114 dose', 'Fiber supplement.');
  createMed('Miralax', 'Polyethylene Glycol', Category.DIGESTIVE, 21.00, 45, '17g', 'Laxative powder.');
  createMed('Dulcolax', 'Bisacodyl', Category.DIGESTIVE, 9.50, 80, '5mg', 'Stool softener.');
  createMed('Gas-X', 'Simethicone', Category.DIGESTIVE, 8.00, 90, '125mg', 'Gas relief.');
  createMed('Pepcid AC', 'Famotidine', Category.DIGESTIVE, 14.50, 65, '20mg', 'Acid controller.');
  createMed('Zantac 360', 'Famotidine', Category.DIGESTIVE, 15.00, 60, '20mg', 'Heartburn prevention.');
  createMed('Lactaid', 'Lactase Enzyme', Category.DIGESTIVE, 11.99, 50, '9000 FCC', 'Dairy digestive aid.');
  createMed('Colace', 'Docusate Sodium', Category.DIGESTIVE, 13.50, 75, '100mg', 'Stool softener.');
  createMed('Phillips Milk of Magnesia', 'Magnesium Hydroxide', Category.DIGESTIVE, 7.99, 40, '1200mg', 'Saline laxative.');
  createMed('Align Probiotic', 'Bifidobacterium', Category.DIGESTIVE, 30.00, 25, '1 capsule', 'Gut health.');

  // Antihistamines (12)
  createMed('Claritin', 'Loratadine', Category.ANTIHISTAMINES, 19.99, 80, '10mg', '24hr allergy relief.');
  createMed('Zyrtec', 'Cetirizine', Category.ANTIHISTAMINES, 21.99, 75, '10mg', 'Allergy relief.');
  createMed('Allegra', 'Fexofenadine', Category.ANTIHISTAMINES, 23.50, 70, '180mg', 'Non-drowsy allergy.');
  createMed('Benadryl', 'Diphenhydramine', Category.ANTIHISTAMINES, 7.99, 150, '25mg', 'Allergy & Itch.');
  createMed('Xyzal', 'Levocetirizine', Category.ANTIHISTAMINES, 24.00, 60, '5mg', '24hr allergy.');
  createMed('Flonase', 'Fluticasone', Category.ANTIHISTAMINES, 18.00, 85, '50mcg', 'Nasal spray.');
  createMed('Nasacort', 'Triamcinolone', Category.ANTIHISTAMINES, 19.50, 80, '55mcg', 'Allergy spray.');
  createMed('Chlor-Trimeton', 'Chlorpheniramine', Category.ANTIHISTAMINES, 6.50, 40, '4mg', '4 hour allergy.');
  createMed('Alavert', 'Loratadine', Category.ANTIHISTAMINES, 14.00, 30, '10mg', 'Orally disintegrating.');
  createMed('Clarinex', 'Desloratadine', Category.ANTIHISTAMINES, 35.00, 20, '5mg', 'Prescription allergy.');
  createMed('Astepro', 'Azelastine', Category.ANTIHISTAMINES, 22.00, 45, '0.15%', 'Antihistamine spray.');
  createMed('Pataday', 'Olopatadine', Category.ANTIHISTAMINES, 16.99, 50, '0.2%', 'Eye allergy drops.');

  // Vitamins (15)
  createMed('Nature Made D3', 'Vitamin D3', Category.VITAMINS, 11.00, 200, '2000 IU', 'Bone health.');
  createMed('Centrum Adult', 'Multivitamin', Category.VITAMINS, 16.99, 150, '1 tablet', 'Daily supplement.');
  createMed('Fish Oil', 'Omega-3', Category.VITAMINS, 22.50, 90, '1000mg', 'Heart health.');
  createMed('Emergen-C', 'Vitamin C', Category.VITAMINS, 12.00, 100, '1000mg', 'Immune support.');
  createMed('Magnesium Glycinate', 'Magnesium', Category.VITAMINS, 18.00, 60, '200mg', 'Muscle relaxation.');
  createMed('B-Complex', 'Vitamin B', Category.VITAMINS, 14.50, 80, '1 tablet', 'Energy metabolism.');
  createMed('Iron Supplement', 'Ferrous Sulfate', Category.VITAMINS, 8.99, 70, '65mg', 'Red blood cell support.');
  createMed('Calcium + D3', 'Calcium Carbonate', Category.VITAMINS, 13.00, 85, '600mg', 'Bone strength.');
  createMed('Zinc', 'Zinc Gluconate', Category.VITAMINS, 7.50, 95, '50mg', 'Immune function.');
  createMed('Melatonin', 'Melatonin', Category.VITAMINS, 9.00, 120, '5mg', 'Sleep support.');
  createMed('Probiotic 10', 'Probiotic Blend', Category.VITAMINS, 25.00, 40, '20 Billion', 'Digestive balance.');
  createMed('Biotin', 'Vitamin B7', Category.VITAMINS, 10.50, 60, '10000mcg', 'Hair, skin, nails.');
  createMed('CoQ10', 'Coenzyme Q10', Category.VITAMINS, 28.00, 30, '200mg', 'Heart antioxidant.');
  createMed('Glucosamine Chondroitin', 'Glucosamine', Category.VITAMINS, 32.00, 45, '1500mg', 'Joint health.');
  createMed('Prenatal One', 'Multivitamin', Category.VITAMINS, 26.00, 35, '1 tablet', 'Prenatal support.');

  // First Aid (15)
  createMed('Band-Aid Variety', 'Bandages', Category.FIRST_AID, 5.99, 300, 'Assorted', 'Wound coverage.');
  createMed('Neosporin', 'Antibiotic Ointment', Category.FIRST_AID, 8.49, 120, '0.5 oz', 'Infection prevention.');
  createMed('Hydrogen Peroxide', 'Peroxide', Category.FIRST_AID, 2.00, 100, '32 oz', 'Antiseptic.');
  createMed('Rubbing Alcohol', 'Isopropyl Alcohol', Category.FIRST_AID, 3.50, 90, '16 oz', 'Disinfectant.');
  createMed('Gauze Pads', 'Sterile Gauze', Category.FIRST_AID, 6.00, 80, '4x4 inch', 'Wound dressing.');
  createMed('Medical Tape', 'Adhesive Tape', Category.FIRST_AID, 4.50, 75, '1 inch', 'Secure bandages.');
  createMed('Ace Bandage', 'Elastic Bandage', Category.FIRST_AID, 7.00, 60, '3 inch', 'Compression.');
  createMed('Burn Jel', 'Lidocaine Gel', Category.FIRST_AID, 9.00, 40, '4 oz', 'Burn relief.');
  createMed('Cortizone 10', 'Hydrocortisone', Category.FIRST_AID, 8.00, 65, '1%', 'Itch relief.');
  createMed('Instant Ice Pack', 'Cold Pack', Category.FIRST_AID, 3.00, 150, '1 pack', 'Instant cold therapy.');
  createMed('Calamine Lotion', 'Calamine', Category.FIRST_AID, 5.00, 50, '6 oz', 'Poison ivy relief.');
  createMed('Epsom Salt', 'Magnesium Sulfate', Category.FIRST_AID, 6.50, 70, '4 lb', 'Soaking aid.');
  createMed('Antiseptic Wash', 'Benzalkonium Chloride', Category.FIRST_AID, 7.50, 45, '6 oz', 'Wound wash.');
  createMed('Butterfly Closures', 'Wound Closure', Category.FIRST_AID, 4.00, 80, '12 pack', 'Close small cuts.');
  createMed('New Skin', 'Liquid Bandage', Category.FIRST_AID, 8.50, 35, '0.3 oz', 'Liquid bandage.');

  // Dermatology (12)
  createMed('Hydrocortisone 1%', 'Hydrocortisone', Category.DERMATOLOGY, 4.50, 75, '1%', 'Anti-itch cream.');
  createMed('Differin Gel', 'Adapalene', Category.DERMATOLOGY, 28.00, 30, '0.1%', 'Acne treatment.');
  createMed('PanOxyl', 'Benzoyl Peroxide', Category.DERMATOLOGY, 11.00, 50, '10%', 'Acne wash.');
  createMed('CeraVe Cream', 'Moisturizer', Category.DERMATOLOGY, 16.00, 60, '16 oz', 'Skin barrier repair.');
  createMed('Aquaphor', 'Petrolatum', Category.DERMATOLOGY, 12.50, 80, '7 oz', 'Healing ointment.');
  createMed('Lotrimin Ultra', 'Butenafine', Category.DERMATOLOGY, 15.00, 40, '1%', 'Antifungal cream.');
  createMed('Nizoral', 'Ketoconazole', Category.DERMATOLOGY, 14.50, 35, '1%', 'Anti-dandruff shampoo.');
  createMed('Retinol Serum', 'Retinol', Category.DERMATOLOGY, 22.00, 45, '30ml', 'Anti-aging.');
  createMed('Selsun Blue', 'Selenium Sulfide', Category.DERMATOLOGY, 9.00, 55, '1%', 'Dandruff control.');
  createMed('Tinactin', 'Tolnaftate', Category.DERMATOLOGY, 7.50, 40, '1%', 'Athlete\'s foot spray.');
  createMed('Compound W', 'Salicylic Acid', Category.DERMATOLOGY, 10.00, 60, '17%', 'Wart remover.');
  createMed('Amlactin', 'Lactic Acid', Category.DERMATOLOGY, 18.00, 25, '12%', 'Exfoliating lotion.');

  // Diabetes (10)
  createMed('OneTouch Strips', 'Test Strips', Category.DIABETES, 45.00, 100, '50 ct', 'Glucose testing.');
  createMed('Accu-Chek Lancets', 'Lancets', Category.DIABETES, 12.00, 150, '100 ct', 'Blood sampling.');
  createMed('Glucose Tablets', 'Dextrose', Category.DIABETES, 6.00, 80, '50 ct', 'Low blood sugar.');
  createMed('Alcohol Swabs', 'Isopropyl Alcohol', Category.DIABETES, 3.00, 200, '100 ct', 'Skin prep.');
  createMed('Sharps Container', 'Disposal', Category.DIABETES, 8.00, 40, '1 qt', 'Needle disposal.');
  createMed('Diabetic Socks', 'Socks', Category.DIABETES, 10.00, 60, '1 pair', 'Circulation support.');
  createMed('Glucerna', 'Nutritional Shake', Category.DIABETES, 14.00, 50, '6 pack', 'Diabetes nutrition.');
  createMed('Metformin', 'Metformin HCl', Category.DIABETES, 4.00, 300, '500mg', 'Blood sugar control.');
  createMed('Januvia', 'Sitagliptin', Category.DIABETES, 480.00, 10, '100mg', 'Type 2 diabetes.');
  createMed('Farxiga', 'Dapagliflozin', Category.DIABETES, 500.00, 10, '10mg', 'Diabetes management.');

  // Respiratory (10)
  createMed('Mucinex', 'Guaifenesin', Category.RESPIRATORY, 14.00, 90, '600mg', 'Expectorant.');
  createMed('Delsym', 'Dextromethorphan', Category.RESPIRATORY, 13.50, 65, '3 oz', 'Cough suppressant.');
  createMed('Vicks VapoRub', 'Menthol/Camphor', Category.RESPIRATORY, 6.50, 100, '1.76 oz', 'Cough suppressant topical.');
  createMed('Sudafed', 'Pseudoephedrine', Category.RESPIRATORY, 9.00, 50, '30mg', 'Nasal decongestant.');
  createMed('Robitussin DM', 'Guaifenesin/DM', Category.RESPIRATORY, 8.50, 75, '4 oz', 'Cough and chest congestion.');
  createMed('Afrin', 'Oxymetazoline', Category.RESPIRATORY, 7.00, 60, '0.5 oz', 'Nasal spray.');
  createMed('Halls Drops', 'Menthol', Category.RESPIRATORY, 4.00, 150, '30 ct', 'Cough drops.');
  createMed('Primatene Mist', 'Epinephrine', Category.RESPIRATORY, 28.00, 20, '11.5g', 'Asthma relief.');
  createMed('Zicam', 'Zinc', Category.RESPIRATORY, 12.00, 45, '25 ct', 'Cold shortening.');
  createMed('Airborne', 'Vitamin C Blend', Category.RESPIRATORY, 9.00, 80, '10 tabs', 'Immune support.');

  // Eye & Ear (15)
  createMed('Visine', 'Tetrahydrozoline', Category.EYE_EAR, 5.50, 90, '0.5 oz', 'Redness relief.');
  createMed('Clear Eyes', 'Naphazoline', Category.EYE_EAR, 4.50, 85, '0.5 oz', 'Redness relief.');
  createMed('Systane Ultra', 'Lubricant Eye Drops', Category.EYE_EAR, 12.00, 60, '10ml', 'Dry eye relief.');
  createMed('Refresh Plus', 'Carboxymethylcellulose', Category.EYE_EAR, 14.00, 55, '30 vials', 'Lubricating drops.');
  createMed('Debrox', 'Carbamide Peroxide', Category.EYE_EAR, 7.00, 50, '0.5 oz', 'Earwax removal.');
  createMed('Swim-Ear', 'Isopropyl Alcohol', Category.EYE_EAR, 6.00, 40, '1 oz', 'Drying aid.');
  createMed('Similasan Ear', 'Homeopathic', Category.EYE_EAR, 9.00, 35, '10ml', 'Earache relief.');
  createMed('Lumify', 'Brimonidine', Category.EYE_EAR, 21.00, 25, '2.5ml', 'Redness reliever.');
  createMed('Bausch+Lomb Renu', 'Solution', Category.EYE_EAR, 8.50, 60, '12 oz', 'Contact solution.');
  createMed('Opti-Free', 'Solution', Category.EYE_EAR, 10.00, 65, '10 oz', 'Contact disinfecting.');
  createMed('TheraTears', 'Lubricant', Category.EYE_EAR, 13.00, 40, '15ml', 'Dry eye therapy.');
  createMed('Zaditor', 'Ketotifen', Category.EYE_EAR, 15.00, 30, '5ml', 'Itch relief.');
  createMed('Ocuvite', 'Vitamins', Category.EYE_EAR, 18.00, 45, '50 gels', 'Eye health vitamins.');
  createMed('PreserVision', 'AREDS 2', Category.EYE_EAR, 30.00, 30, '120 gels', 'Eye vitamin.');
  createMed('Stye Ointment', 'Lubricant', Category.EYE_EAR, 10.00, 25, '3.5g', 'Stye relief.');

  // Fill up to 160 if needed with generics
  while (medicines.length < 160) {
    createMed(`Generic Med ${idCounter}`, 'Placebo', Category.PAIN_RELIEF, 5.00, 100, '1 tab', 'General purpose.');
  }

  return medicines;
};

export const MEDICINES: Medicine[] = generateMedicines();
export const ALL_DISTRIBUTORS = DISTRIBUTORS;

export const CATEGORY_IMAGES: Record<Category, string> = {
  [Category.ANALGESICS]: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300',
  [Category.ANTIBIOTICS]: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=300',
  [Category.CARDIOVASCULAR]: 'https://images.unsplash.com/photo-1628771065518-0d82f21452e2?auto=format&fit=crop&q=80&w=300',
  [Category.VITAMINS]: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=300',
  [Category.FIRST_AID]: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=300',
  [Category.ANTIHISTAMINES]: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=300',
  [Category.DIGESTIVE]: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=300',
  [Category.DERMATOLOGY]: 'https://images.unsplash.com/photo-1556228720-1987df5621e8?auto=format&fit=crop&q=80&w=300',
  [Category.DIABETES]: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=300',
  [Category.RESPIRATORY]: 'https://images.unsplash.com/photo-1631889993859-b5755835e525?auto=format&fit=crop&q=80&w=300',
  [Category.PAIN_RELIEF]: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=300',
  [Category.EYE_EAR]: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=300',
};
