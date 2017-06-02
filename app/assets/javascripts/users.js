/*global $*/
/*global Stripe*/
$(document).ready(function () {
   Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
   
   $("#form-submit-btn").click(function(event) {
       event.preventDefault();
       $('input[type=submit]').prop('disabled', true);
       var error = false;
       var ccNum = $('#card_number').val(),
           cvcNum = $('#card_coede').val(),
           expMonth = $('#card_month').val(),
           expYeaar = $('#card_year').val();
           
           if (!error) {
               //get the stripe token :
               Stripe.createToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYeaar
               }, stripeResponseMandler);
           }
           return false;
   });
   
   function stripeResponseMandler(status, response) {
       var f = $("#new_user");
       
       var token = response.id;
       
       f.append('<input type="hidden" name="user[stripe_card_token]" value="' + token + '" />');
       
       f.get(0).submit();
   }

});