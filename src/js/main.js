import $ from '../local_modules/jquery/dist/jquery.min'

$(document).ready(() => {
    // eslint-disable-next-line no-console
    console.log(`document ready`);
    AOS.init();

    const deactivateLinkBg = list => {
        list.forEach((item, index, array) => {
            $(item).css('display', 'none');
        })
    }

    $('#nav_close').click(() => { 
        $('#navMobile').hide();
    })

    $('#burger').click(() => { 
        $('#navMobile').css('display','flex');
    })

    $('#tg').click(() => { 
        $('#tgFull').toggle('slow');
        $('#tg').toggleClass('tg-active');
    })

    $('#noTg').click(() => { 
        $('#tgFull').hide();
        $(window).scrollTop($('#callback').offset().top + 10);
    })
    
    $('#logo_link').click(() => {
        $(window).scrollTop(0);
    })

    $('#about_link').click(() => {
        $(window).scrollTop($('#about').offset().top + 10);
    })

    $('#our_cases_link').click(() => {
        $(window).scrollTop($('#our_cases').offset().top + 10);
    })

    $('#work_link').click(() => {
        $(window).scrollTop($('#work').offset().top + 10);
    })

    $('#callback_link').click(() => {
        $(window).scrollTop($('#callback').offset().top + 10);
    })

    $('#contacts_link').click(() => {
        $(window).scrollTop($('#contacts').offset().top + 10);
    })

    $('#about_link-m').click(() => {
        $('#navMobile').hide();
        $(window).scrollTop($('#about').offset().top + 10);
    })

    $('#our_cases_link-m').click(() => {
        $('#navMobile').hide();
        $(window).scrollTop($('#our_cases').offset().top + 10);
    })

    $('#work_link-m').click(() => {
        $('#navMobile').hide();
        $(window).scrollTop($('#work').offset().top + 10);
    })

    $('#callback_link-m').click(() => {
        $('#navMobile').hide();
        $(window).scrollTop($('#callback').offset().top + 10);
    })

    $('#contacts_link-m').click(() => {
        $('#navMobile').hide();
        $(window).scrollTop($('#contacts').offset().top + 10);
    })
    
    $('#logo_link_contacts').click(() => {
        $(window).scrollTop(0);
    })

    $('#about_link_contacts').click(() => {
        $(window).scrollTop($('#about').offset().top + 10);
    })

    $('#work_link_contacts').click(() => {
        $(window).scrollTop($('#work').offset().top + 10);
    })

    $('#callback_link_contacts').click(() => {
        $(window).scrollTop($('#callback').offset().top + 10);
    })

    $(window).scroll(function() {
        const links_list = ['#about_link_bg', '#our_cases_link_bg', '#work_link_bg', '#callback_link_bg', '#contacts_link_bg']
        
        if ($(window).scrollTop() < $('#about').offset().top) {
            deactivateLinkBg(links_list);
        }

        else if ($(window).scrollTop() > $('#about').offset().top && $(window).scrollTop() < $('#our_cases').offset().top) {
            deactivateLinkBg(links_list);
            $('#about_link_bg').show();
        }

        else if ($(window).scrollTop() > $('#our_cases').offset().top && $(window).scrollTop() < $('#work').offset().top) {
            deactivateLinkBg(links_list);
            console.log('asdasdasd')
            $('#our_cases_link_bg').show();
        }

        else if ($(window).scrollTop() > $('#work').offset().top && $(window).scrollTop() < $('#callback').offset().top) {
            deactivateLinkBg(links_list);
            $('#work_link_bg').show();
        }

        else if ($(window).scrollTop() > $('#callback').offset().top && $(window).scrollTop() < $('#callback_channel').offset().top) {
            deactivateLinkBg(links_list);
            $('#callback_link_bg').show();
        }

        else if ($(window).scrollTop() > $('#callback_channel').offset().top) {
            deactivateLinkBg(links_list);
            $('#contacts_link_bg').show();
        }
      });

    $('#callback_form').submit(e => {
        e.preventDefault();
        const name = $('#callback_name').val();
        const channel = $('#callback_channel').val();
        const textarea = $('#callback_about').val();
        
        const text = `%3Cb%3EName%3C/b%3E%0A${name}%0A%3Cb%3EPreferred%20communication%20method%3C/b%3E%0A${channel}%0A%3Cb%3EMessage%3C/b%3E%0A${textarea}`;
        $.ajax({
            'url': 'https://api.telegram.org/bot2079108145:AAG22VqgLvORI8_wo8uVcOwHgIVo28hVH6Q/sendMessage',
            'method': 'post',
            'data-type': 'html',
            'data': {
                'chat_id': '379278124',
                'parse_mode': 'html',
                'text': text
            },

            'success': () => {
                console.log('ajax successed');
            }

        })
    })
})
