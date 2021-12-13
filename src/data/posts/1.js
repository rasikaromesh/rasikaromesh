const post1 = {
  id: 1,
  date: {
    year: '2021',
    month: 'September',
    day: '10',
  },
  title: 'How to retry on service when failure happens.',
  body: [
    {
      type: 'paragraph',
      text: `We can find many use cases where we need to retry on some services or APIs when there is an error in the api. It might be a network failure or any application failure. So today I am going to explain a way to retry with a Java Spring application.`,
    },
    {
      type: 'paragraph',
      text: `Before everything we need to initialize a Java spring project and for that I am going to use Spring Initializer(https://start.spring.io/). If you need to know more about generating projects with Spring initializer please check this link.`,
    },
    {
      type: 'paragraph',
      text: `Of course then we need to add a couple dependencies to the pom.xml file.`,
    },
    {
      type: 'paragraph',
      text: `This is for the retry.`,
    },
    {
      type: 'code',
      text: `
<dependency>
  <groupId>org.springframework.retry</groupId>
  <artifactId>spring-retry</artifactId>
  <version>1.2.5.RELEASE</version>
</dependency>`,
    },
    {
      type: 'paragraph',
      text: `And this is to add Spring AOP.`,
    },
    {
      type: 'code',
      text: `
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-aspects</artifactId>
  <version>5.2.8.RELEASE</version>
</dependency>`,
    },
    {
      type: 'paragraph',
      text: `Next We need to create a configuration class and later we use this to create the RetryTemplate bean. Let’s name this class as RetryConfig. 
      We have to annotate this call with @Configuration and @EnableRetry annotations.`,
    },
    {
      type: 'code',
      text: `@Configuration
      @EnableRetry
      @ConfigurationProperties("retry-config")
      public class RetryConfig {
      }`,
    },
    {
      type: 'paragraph',
      text: `Our next step would be defining the bean. So Let’s create a method for that and I am giving the name retryTemplate. This method should return a RetryTemplate object.`,
    },
    {
      type: 'code',
      text: `@Bean
  public RetryTemplate retryTemplate() {
}`,
    },
    {
      type: 'paragraph',
      text: `Then we need to create a BackOffPolicy and a RetryPolicy. With BackOffPolicy we can decide the wait time before the next retry. 
      When creating a BackOffPolicy we need to provide a backoff period in milliseconds as long value and the default value is 1000l (1000 millisecond). 
      There are different types of BackOffPolicies and for simplicity let’s use FixedBackOffPolicy for this and which will fix the amount of time that we are providing before the retry.`,
    },
    {
      type: 'paragraph',
      text: 'So here’s how we do it.',
    },
    {
      type: 'code',
      text: `FixedBackOffPolicy backOffPolicy = new FixedBackOffPolicy();
      backOffPolicy.setBackOffPeriod(5000l); // 5 second wait`,
    },
    {
      type: 'paragraph',
      text: `The next part is RetryPolicy. In Spring Boot there are multiple RetryPolicy classes, designed for different use cases. 
      (AlwaysRetryPolicy, CircuitBreakerRetryPolicy, CompositeRetryPolicy, ExceptionClassifierRetryPolicy, ExperssionRetryPolicy, NeverRetryPolicy, SimpleRetryPolicy, TimeoutRetryPolocy)`,
    },
    {
      type: 'paragraph',
      text: `For this code I am going to use SimpleRetryPolicy.`,
    },
    {
      type: 'code',
      text: `SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy();
retryPolicy.setMaxAttempts(2);
retryTemplate.setRetryPolicy(retryPolicy);`,
    },
    {
      type: 'paragraph',
      text: `MaxAttemps value will define the number of retries. In this example if it fails the first time this will retry two more times.`,
    },
    {
      type: 'paragraph',
      text: `Then we can use this retryTemplate bean where we need to retry. Let’s assume we have a service called TestService and it has a method called callApi(). 
      So here’s how we can use retryTemplate.`,
    },
    {
      type: 'code',
      text: `@Component
public class Test {
    @Autowired
    TestService testService;

    @Autowired
    RetryTemplate retryTemplate;

    public void invokeService(){
        retryTemplate.execute(arg0 -> {
            testService.callApi();
            return null;
        });
    }
}
      `,
    },
    {
      type: 'paragraph',
      text: `You can find below complete RetryTemplateConfiguration class`,
    },
    {
      type: 'code',
      text: `@Configuration
@EnableRetry
public class RetryConfig {
    @Bean
    public RetryTemplate retryTemplate() {
        RetryTemplate retryTemplate = new RetryTemplate();

        FixedBackOffPolicy fixedBackOffPolicy = new FixedBackOffPolicy();
        fixedBackOffPolicy.setBackOffPeriod(5000l);// 5 second wait
        retryTemplate.setBackOffPolicy(fixedBackOffPolicy);

        SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy();
        retryPolicy.setMaxAttempts(2);
        retryTemplate.setRetryPolicy(retryPolicy);

        return retryTemplate;
    }
}
  `,
    },
  ],
  summery: `We can find many use cases where we need to retry on some services or APIs when there is an error in the api. It might be a network failure or any application failure. So here is the way`,
  tags: ['Java', 'SpringBoot'],
};

export default post1;
