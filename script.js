
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        faqItems.forEach(el => {
            if (el !== item) {
               el.classList.remove('active');
            }
          
        });
        item.classList.toggle('active');
    });
});













document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar');
    const body = document.body;
    
    // যে আইটেমগুলো আমরা সার্চ করবো
    const faqItems = document.querySelectorAll('.faq-item');
    const idCards = document.querySelectorAll('.id-desine');
    const allSearchableItems = [...faqItems, ...idCards]; // সবগুলো আইটেমকে একটি লিস্টে নিলাম

    const div1 = document.querySelector('.div1');
    const div3 = document.querySelector('.div3');

    const performSearch = () => {
        const filter = searchInput.value.toLowerCase().trim();

        // ১. যদি সার্চ বক্স খালি থাকে
        if (filter === "") {
            body.style.backgroundColor = ""; // আগের ব্যাকগ্রাউন্ড কালারে ফিরে যাবে
            div1.style.display = "";         // FAQ সেকশন দেখাবে
            div3.style.display = "";         // Div 3 দেখাবে
            
            allSearchableItems.forEach(item => {
                item.style.display = "";      // সব কার্ড এবং FAQ দেখাবে
            });
            return;
        }

        // ২. সার্চ শুরু করলে ব্যাকগ্রাউন্ড কালার ফিক্সড হয়ে যাবে
        // আপনি এখানে আপনার পছন্দমতো কালার কোড দিতে পারেন
        body.style.backgroundColor = "#2c3e50"; 
        body.style.transition = "background-color 0.3s ease"; // স্মুথ পরিবর্তনের জন্য

        // ৩. সার্চ চলাকালীন অপ্রাসঙ্গিক সেকশন (যেমন Div 3) লুকিয়ে ফেলা
        div3.style.display = "none";
        
        // ৪. মেইন লজিক: সব এলিমেন্টের ভেতর সার্চ করা
        let matchFound = false;

        allSearchableItems.forEach(item => {
            const text = item.innerText.toLowerCase();
            
            if (text.includes(filter)) {
                item.style.display = ""; // মিললে দেখাবে (আপনার অরিজিনাল ডিজাইন ভাঙবে না)
                matchFound = true;
            } else {
                item.style.display = "none"; // না মিললে হাইড হয়ে যাবে
            }
        });

        // ৫. যদি FAQ সেকশনে কোনো রেজাল্ট না থাকে, তবে সেই সেকশনটিই হাইড করে দিবে
        const visibleFaqs = Array.from(faqItems).filter(f => f.style.display !== "none");
        if (visibleFaqs.length === 0) {
            div1.style.display = "none";
        } else {
            div1.style.display = "block";
        }
    };

    // ইনপুট ইভেন্ট লিসেনার
    searchInput.addEventListener('input', performSearch);
});
  
