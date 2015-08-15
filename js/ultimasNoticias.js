
                                            twitterFetcher.fetch('441270428225372160', 'example1', 5, true, false, false, 'dateFormatter', false, handleTweets, true);

                                            function dateFormatter(date) {
                                                alert(date.toTimeString());
                                                return date.toTimeString();
                                            }

                                            function handleTweets(tweets) {
                                                var x = tweets.length;
                                                var n = 0;
                                                var html = '<ul id="news">';
                                                while (n < x) {
                                                    html += '<li class="news">' + tweets[n] + '</li>';
                                                    n++;
                                                }
                                                html += '</ul>';
                                                $("#DivUltimasNoticias").html(html);

                                                $('#news').innerfade({
                                                    animationtype: 'slide',
                                                    speed: 1000,
                                                    timeout: 5000,
                                                    type: 'sequence',
                                                    containerheight: '150px'
                                                });


                                            }
   
